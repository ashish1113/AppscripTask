import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  Name: string;
  questionToken: number;
  cricketerArray: string[];
  bestCricketer: string;


  // for setting the validation of checkBox Form

  form: FormGroup;


  colorsData = [
    { id: 1, name: 'White' },
    { id: 2, name: 'Yellow ' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Green ' }
  ];
  colorSelected: any =[];
  colorString: any ="";
 

  constructor(private formBuilder: FormBuilder) {

    

   }



// for crating the checkboxes
   private addCheckboxes() {
    this.colorsData.forEach((o, i) => {

     
      const control = new FormControl(); 
      (this.form.controls.colors as FormArray).push(control);
    });
  }


//  for setting the colors choosen


  setColorArray(colorData,event){
    console.log(colorData)


    if(event.target.checked){
      this.colorSelected.push(colorData);
    }else {
      let index = this.colorSelected.indexOf(colorData);
      this.colorSelected.splice(index,1);
    }


    console.log("the data after set",this.colorSelected)

  }


  ngOnInit() {

    this.Name ="";
    this.questionToken = 1
    this.bestCricketer =''

    this.cricketerArray = ['Sachin Tendulkar ',"Virat Kohli","Adam Gilchirst","Jacques Kallis"]


    this.form = this.formBuilder.group({
      colors:  new FormArray([], minSelectedCheckboxes(1))
    });


    this.addCheckboxes();
  }


  // for  changing the token to go to Question 2

  setName(){
    this.questionToken = 2
    // alert("name is "+this.Name)
  }

  // for  changing the token to go to Question 3

  selectBestCricketer(){

    this.questionToken = 3
   
  }

  // for changing the token to go to Question 4 and setting the color array ,the submission is also done here
  


  setFinalColor(){

    let len = this.colorSelected.length
    console.log("array lengt",len)
    for(let x in this.colorSelected){
      let y = parseInt(x)
      console.log(y,typeof y)

      if( parseInt(x) < len-1){

        

        let str = `${this.colorSelected[x].name},`

      
        this.colorString = this.colorString + str ;
      }
      else{
        let str = `${this.colorSelected[x].name}.`

       
        this.colorString = this.colorString + str ;
      }
    }

    console.log("color string",this.colorString)

    this.setData()
   
    this.questionToken = 4

  }

  // final submmission function

  setData(){

    let Arr =[]

     Arr = JSON.parse(localStorage.getItem('triviaHistory'))

     if ( Arr == null){
      Arr =[]
     }


    let tempData = {
      "name":this.Name,
      "bestCricketer":this.bestCricketer,
      "date": Date.now(),
      "colorSelected":this.colorSelected,
      "colorString":this.colorString

    }

    Arr.push(tempData);

    // the new game is saved to the local storage
    localStorage.setItem('triviaHistory', JSON.stringify(Arr))


    console.log("item" ,JSON.parse(localStorage.getItem('triviaHistory')));

    
  
  }

  // For resseting the formControls

  resetData(){
    this.Name=''
    this.bestCricketer=''
     this.colorSelected = []
    this.colorString=''
    this.questionToken =1

    this.form.reset()
  }



}

// custom validation function to check the checkbox validity


function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => next ? prev + next : prev, 0);

    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}
