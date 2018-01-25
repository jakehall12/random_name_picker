var arr = [];
        
        function pushData(){
            // Takes the value from the input field
            var input = document.getElementById('inputText').value;
            
            // Pushes the value to the array
            arr.push(input);
            
            // creates new array to be used
            var pval = "";
            
            for(i = 0; i < arr.length; i++){
                pval =  pval + (i+1)+". "+ arr[i] + "<br/>";
            }
            // Adds the added name to the list below
            document.getElementById('testAdd').innerHTML = pval;
            console.log(arr);
        }
        function findName(){
            console.log(arr);
            var ranName = arr[Math.floor(Math.random() * arr.length)];
            document.getElementById('picked').innerHTML = ranName;
            console.log(ranName);
        }