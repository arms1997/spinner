process.stdout.write('hello from spinner1.js... \rheyyy\n')

let arr = ['|', '/', '-', '\\', '|']

let timer = 100
for(let value of arr){
  setTimeout(()=> {
    process.stdout.write(`\r${value}    `)
  }, timer)
  timer +=200
}