/*t abhi tk t hmne srf ksi function k argument m srf variable ya hard coded hi pass kia th
lkn ab hm dkhnge k hm ks trhn ksi function k argument m ek dsre function ko bh pss krskte hn */

/*example of the variable use as an argument in function at the time of invoking the function:*/

/* let num1 = 10
let num2 = 20
function add(a, b) {
    console.log(a + b)
}

add(num1, num2) */

/*// t callback function hta hi ye h k js trhn hm ek function k argument m dsra variable pass
krskte hn isi trhn hm ek function k argument m dsra function bh as an argument pass krskte hn
t isi function ko jsko hm argument ki jgh pe lkhte hn oose callback function khte hn. ab dkhte
hn k isko lkhne ka kia treeqa h: */

/* function clBck(n1, n2, myClBck) {
  console.log(n1 + n2)
    console.log(myClBck)
}

function hello() {
    console.log("hello world")
}

clBck(1, 2, hello()) */

/* function add(num1, num2, callBack) {
    console.log(num1 + num2)
    callBack()
}

function hello() {
    console.log("hello world")
}

add(10, 20, hello) */

/* function sum(num1, num2, callBack) {
    console.log(num1, num2, callBack)
}

function hello() {
    console.log("hello world")
}

sum(10, 20, hello()) */

/* sum(10, 20, function () {
    console.log("bye")
}) */

/*////call back by it mate */
/*//ksi bh function k argument m jb koi func pass kia jae t isko khte hn k ye callback func
h isko example se smjhte hn hm ek func bnate hn r usko koi parameter dte hn para ka name kch bh
hskta h lkn hm usko name dte hn callback ka ab hm us func ko cl krlte hn t ab error aagya qk
hmne oose koi argument nh dia t ab hmn oose argument m koi func hi pass krna h t hm ek r func
bna lte hn r whi func hm uske argument m pss krdte hn t ab hmari jo definition th t wo puri hgai
k jb bh ksi func k argument m koi dsra func pass kia jae t use khte hn callback func. ab is call
back func ko agr hmn call krna h t hm kse krnge iska treeqa thra sa differ h actual m differ nh h
concept actual m smjh hi yhn pe aata h wo hm baad m dkhnge phle hm dkhte hn k is callback func ko
hm call kse krnge t isko cl krnge hm apne phle wle func ki body m taake jb uske para se is call
back ka argument match kre t wo seedha usi func ki body m jaega zhir c bt h r jb func ki body m
jaega t whn hm oose undr btaenge k hmare ps jo parameter(callback ka name se h us) ki jo value h
wo qk ek fnction h t islye hm us parameter k sth paranthesis lga k oose btaenge k is parameter
k argument m ek func h t islye hm phle wle fnc ki body m callback(parametr m hm jo name lkhnge
whi uski bpdy m bh lkhnge) lkh k phr paranthesis lgaenge jsse usse pta chlega k is parametr k
argument m fnc aayega. ab hmne ye lkh dia. qk hmne ek fnc k argument m ek fnc pass kia t wo apne
parameter se jaake match krega r jb match krne ki condition true hjaegi t wo us ki body k undr
jaake dkhega k whn oose is parameter k lye kia kaam krne order dia gya h ab jb wo body k undr
gya t usne dkha k whn bh us parameter ka zkr kia gya h yni para ko koi kaam dia gya h t ab wo
check krega k kia kaam dia h t usne paranthesis se identify krlia k ksi fnc ka kaam dia h ab is
trhn is parameter ki value m argument ki condition true hne ki wjh se phr wo us fnc m jaega jska
name oose argument m dia h. ab jb hm fnc ko invoke krnge t hmn koi ans nh mlega qk hmne ksi b
fnc ko koi kaam print krwne k lye nh dia abhi tk. t islye ab hm fnc ko print krwne ka kaam dte hn*/

/* function hello(callBack) {
    callBack
}

let arrowFunc = (name)=>{
    console.log(`hello ${name}`)
    // let userName = prompt("enter your name")
}

let userName = prompt("enter your name")

hello(arrowFunc(userName)) */

/* let userName = prompt("enter your name")

function hello(callback) {
    callback(userName)
}

let arrowFunc = (name)=> {
    console.log(`hello ${name}`)
}

hello(arrowFunc) */

/* function hello(callback, newName) {
    callback(newName)
}

let arrowFunc = (name)=> {
    console.log(`hello ${name}`)
}

hello(arrowFunc, "sarmad") */