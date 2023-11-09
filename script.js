
    let array = [60, 30, 10, 88, 12, 50, 48, 68, 28, 4, 74, 96, 98, 2, 8, 30, 20];
    let shalin = document.getElementById('parent');
    let mulVal=4;
    let btnVal = true;

    function randomizeArray(){
        for(let i=array.length-1;i>0;i--) {
            const j=Math.floor(Math.random()*(i + 1));
            [array[i],array[j]]=[array[j],array[i]];
        }
        graph();
    }


    function selectionSort(){
        for(let i=0;i<array.length-1;i++) {
            let minIndex=i;

            for(let j=i+1;j<array.length;j++) {
                if (array[j]<array[minIndex]) {
                    minIndex=j;
                }
            }
    
            [array[minIndex],array[i]]=[array[i],array[minIndex]];
            console.log(array);
            graph();
        }

    }


    function bubbleSort(){
        let n=array.length;

    for (let i=0;i<n-1;i++) {
        for (let j=0;j<n-i-1;j++) {
            if(array[j]<array[j+1]){
                [array[j],array[j+1]]=[array[j+1],array[j]];
            }
        }
        graph();
    }   
    }



    function quickSort() {

        recursiveQuickSort(array,0,array.length-1);
        graph();

    }
    
    function recursiveQuickSort(arr,low,high) {
        if(low<high){

            let pivotIndex=partition(arr,low,high);
            recursiveQuickSort(arr,low,pivotIndex-1);
            recursiveQuickSort(arr,pivotIndex+1,high);

        }
    }
    
    function partition(arr,low,high) {
    
        let pivot=arr[high];
        let i=low-1;
    
        for(let j=low;j<high;j++) {
            if (arr[j]<pivot) {
                i++;
                [arr[i],arr[j]]=[arr[j],arr[i]];
            }
        }
    

        [arr[i + 1],arr[high]]=[arr[high],arr[i + 1]];
        return i+1;
    }



   function mergesort() {
    array=recursiveMergeSort(array);
    graph();
}

function recursiveMergeSort(arr) {
    if (arr.length<=1) {
        return arr;
    }

  
    const middle=Math.floor(arr.length/2);
    const leftHalf=arr.slice(0, middle);
    const rightHalf=arr.slice(middle);

    const sortedLeft=recursiveMergeSort(leftHalf);
    const sortedRight=recursiveMergeSort(rightHalf);

    return merge(sortedLeft,sortedRight);
}

function merge(left,right) {
    let result=[];
    let leftIndex=0;
    let rightIndex=0;

    
    while(leftIndex<left.length&&rightIndex<right.length) {
        if(left[leftIndex]>=right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex),right.slice(rightIndex));
}

    
    function shellSort() {
        let n=array.length;
        for(let gap=Math.floor(n/2);gap>0;gap=Math.floor(gap/2)){

            for(let i=gap;i<n;i++) {
                let temp=array[i];
                let j;
                for(j=i;j>=gap&&array[j-gap]>temp;j-=gap) {
                    array[j]=array[j-gap];
                }
                array[j]=temp;
            }

            graph();
        }
    }

  
    function insertionSort(){

        for(let i=1;i<array.length;i++){
            let key=array[i];
            let j=i-1;
    
            while(j>=0&&array[j]<key) {
                array[j+1]=array[j];
                j--;
            }
            array[j+1]=key;

            graph();
        }
    }
    
    function changeSize(){
       btnVal=!btnVal;
       btnVal?mulVal=4:mulVal=2;
       
       graph();
    }

    function graph() {
        shalin.innerHTML='';
        
         
        for(let i=0;i<array.length;i++){

            let div=document.createElement('div');
            let div2=document.createElement('div');
            let p=document.createElement('p');

            div.style.width='20px';
            div.style.marginRight='10px';
            div.style.backgroundColor='blue';

            div.style.height= `${array[i]*mulVal}px`;
            p.textContent= `${array[i]}`;

            shalin.appendChild(div2);
            div2.appendChild(div);
            div2.appendChild(p);
        }
    }

    graph();

