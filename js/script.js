let lightModeBtn=document.getElementById("lightModeBtn");
let darkModeBtn=document.getElementById("darkModeBtn");

darkModeBtn.addEventListener('click', function(){
    //console.log('dark')
    document.documentElement.setAttribute('data-bs-theme','dark');
    localStorage.setItem('themeMode','dark');
    darkModeBtn.classList.add('active');
    lightModeBtn.classList.remove('active');
})

lightModeBtn.addEventListener('click', function(){
    //console.log('dark')
    document.documentElement.setAttribute('data-bs-theme','light');
    localStorage.setItem('themeMode','light');
    lightModeBtn.classList.add('active');
    darkModeBtn.classList.remove('active');
})

let saveThemeMode=localStorage.getItem('themeMode');

if(saveThemeMode == 'dark'){
    document.documentElement.setAttribute('data-bs-theme','dark');
    darkModeBtn.classList.add('active');
    lightModeBtn.classList.remove('active');
}else{
    document.documentElement.setAttribute('data-bs-theme','light');
    lightModeBtn.classList.add('active');
    darkModeBtn.classList.remove('active');
}
