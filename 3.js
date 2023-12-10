let instr=document.getElementById('instr')
let btn=document.getElementById('btn')
let addstr=document.getElementById('addstr')

let arr=[] 
window.onload=()=>{
    arr=JSON.parse(localStorage.getItem('todos'))||[]
    arr.forEach(todo=>addtodo(todo))
}
btn.addEventListener('click',()=>{
    arr.push(instr.value)
    localStorage.setItem('todos',JSON.stringify(arr))
    addtodo(instr.value)
    instr.value=''
})

function addtodo(todo){ 
    let para=document.createElement('p')
    para.innerText=todo
    addstr.appendChild(para)

    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        remove(todo)
    })

    para.addEventListener('dblclick',()=>{
        addstr.removeChild(para)
        remove(todo)
    })
}

function remove(todo){
    let index=arr.indexOf(todo)
    arr.splice(index,1)
    localStorage.setItem('todos',JSON.stringify(arr))
}