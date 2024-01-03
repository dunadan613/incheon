function fnSetActive(el,opt){
  if(opt=='on'){
    el.classList.add('active');
  }
  else if(opt=='off'){
    el.classList.remove('active');
  }
  else{
    console.log('매개변수 오류');
  }
}

function fnSetDisplay(el,opt){
  el.style.display=opt;
}

function fnSetBackground(el,opt){
  el.style.background=opt;
}

function fnSetColor(el,opt){
  el.style.color=opt;
}

function fnGetCoords(el) {
  let box = el.getBoundingClientRect();
  return {
    top:box.top,
    right: box.right,
    bottom: box.bottom,
    left: box.left,
    abTop: box.top + window.scrollY,
    abRight: box.right + window.scrollX,
    abBottom: box.bottom + window.scrollY,
    abLeft: box.left + window.scrollX
  };
}