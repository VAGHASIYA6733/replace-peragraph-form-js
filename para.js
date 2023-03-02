function data1 (){

    }
    function handleSubmit(event) {
        // document.getElementById("myForm").reset();
        event.preventDefault();
       replace();
      }
    
      function replace(){
        const fname1 = document.getElementById("text").value  
        document.getElementById("dataa").innerHTML=fname1    
        const p = document.getElementById("input2").value
        const p1 = document.getElementById("input1").value
        document.getElementById("datap").innerHTML=
        fname1.replaceAll(p1, p);
// Expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

      }