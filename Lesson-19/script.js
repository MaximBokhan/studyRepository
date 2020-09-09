var start = document.getElementsByTagName('button')[0];
var timer = document.getElementById('timer');
var buttonSaveReset = document.getElementById('buttton-container-none');
var save = document.getElementById('save');
var reset = document.getElementById('reset');
var saveResult = document.getElementById('save-result');
var mm = document.getElementById('mm');
var ss = document.getElementById('ss');
var msms = document.getElementById('msms');
var msecID = null;

start.onclick = function(ev){
    buttonSaveReset.classList.remove('buttton-container-none');
  
    if(start.innerHTML == 'START' || start.innerHTML == 'RUN'){
        start.innerHTML = 'STOP';
        startTimer();
    } else {
        start.innerHTML = 'RUN';
        clearInterval(msecID);
    }

    if(start.innerHTML == 'STOP' || start.innerHTML == 'RUN'){
        timer.classList.remove('timer-container-none');
        timer.classList.add('timer-container')
    }

}

function startTimer() {
    msecID = setInterval(msecIteration, 10);
}

function msecIteration() {
    if (parseInt(msms.dataset.msms) >= 100) {
        msms.dataset.msms = 0;
        ss.dataset.ss = parseInt(ss.dataset.ss)+1;
        if(parseInt(ss.dataset.ss)<10){
            ss.innerHTML = '0' + parseInt(ss.dataset.ss)+':';
        } else{
            ss.innerHTML = parseInt(ss.dataset.ss)+':';
        }

        if(parseInt(ss.dataset.ss) > 59) {
            ss.dataset.ss = 0;
            mm.dataset.mm = parseInt(mm.dataset.mm)+1;

            if(parseInt(mm.dataset.mm)<10){
                mm.innerHTML = '0' + parseInt(mm.dataset.mm)+':';
            } else{
                mm.innerHTML = parseInt(mm.dataset.mm)+':'; 
            }

        }

    }

    msms.dataset.msms = parseInt(msms.dataset.msms)+1;
    msms.innerHTML = parseInt(msms.dataset.msms);

    if(parseInt(mm.dataset.mm)==2){
        clearInterval(msecID);
        mm.innerHTML = '60:';
        ss.innerHTML = '00:';
        msms.innerHTML = '00';
    }
    
}

reset.onclick = function(){
    timer.classList.remove('timer-container');
    timer.classList.add('timer-container-none');
    start.innerHTML = 'START'
    buttonSaveReset.classList.add('buttton-container-none');
    clearInterval(msecID);
    msms.dataset.msms = '0';
    msms.innerHTML =  '0' +parseInt(msms.dataset.msms);
    ss.dataset.ss = '0';
    ss.innerHTML =  '0' +parseInt(ss.dataset.ss) + ':';
    mm.dataset.mm = '0';
    mm.innerHTML =  '0' +parseInt(mm.dataset.mm) + ':';
}

save.onclick = function(){
    saveResult.innerHTML += (mm.innerHTML + ss.innerHTML + msms.innerHTML + '<br>')
}












































// function timeoutMsMs() {
//     for(var i=0; i<1000; i++) {
//         setTimeout(upperMsMs, 1)
//     }
//     console.log('step 1 finished')
//     upperSs(); 
//     console.log('step 2 finished')
//     if(parseInt(ss.dataset.ss)<60){
//         timeoutMsMs()
//     }   
// }

// function upperMsMs() {
//     msms.dataset.msms = parseInt(msms.dataset.msms)+1;
//     msms.innerHTML = parseInt(msms.dataset.msms);
// }

// function upperSs() {
//     ss.dataset.ss = parseInt(ss.dataset.ss)+1;
//     ss.innerHTML = parseInt(ss.dataset.ss)+':';
//     msms.dataset.msms = 0;
// }









