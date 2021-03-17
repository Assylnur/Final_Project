const players1 = document.getElementById("players1");
const players2 = document.getElementById("players2");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
var st = " ";

function findCombinationsUtil(arr, index, num, reducedNum) {
    // Base condition
    if (reducedNum < 0)
        return;

    // If combination is found, print it
    if (reducedNum == 0) {
        st += "(";
        for (let i = 0; i < index; i++)
            st += arr[i] + " ";

        st += "), ";
        return;
    }

    // Find the previous number stored in arr[]
    // It helps in maintaining increasing order
    var prev = (index == 0) ? 1 : arr[index - 1];

    // note loop starts from previous number
    // i.e. at array location index - 1
    for (let k = prev; k <= num; k++) {
        // next element of array is k
        arr[index] = k;

        // call recursively with reduced number
        findCombinationsUtil(arr, index + 1, num,reducedNum - k);
    }
}

function findCombinations(n) {
    // array to store the combinations
    // It can contain max n elements
    var arr = [n];

    //find all combinations
    findCombinationsUtil(arr, 0, n, n);
}



const compare = (s1, s2) => {
    if (s1 < s2) {
        document.getElementById("result").innerHTML = `If team 2 scores ${s2} goals and team 1 only ${s1} goals, then the winner is team 2!<br>`;
    }
    else if (s1 > s2) {
        document.getElementById("result").innerHTML = `If team 1 scores ${s1} goals and team 2 only ${s2} goals, then the winner is team 1!<br>`;
    }
    else {
        document.getElementById("result").innerHTML = `If team 1 scores ${s1} goals and team 2 also ${s2} goals, then game is balls!<br>`;
    }

}

const getPlayers = (list, num) => {// array.forEach
    let msg = "team " + num + ": ";
    list.forEach(item => {
        msg += item + ", ";
    }
    )
    console.log(msg.slice(0, st.length - 3));
}
function calculate() {
    // let winners;
    let p1 = [];
    let p2 = [];
    let s1 = Number(score1.value);
    let s2 = Number(score2.value);

    p1 = players1.value.split(",");
    p2 = players2.value.split(",");

    if (p1.length > 11 || p2.length > 11) {
        alert("The number of players in a single team cannot be more than 11.");
    }
    else if (s1 + s2 > 7) {
        alert("The combined number of goals cannot be greater than 7. ");
    }
    else if(p1==""||p2==""){
        alert("Please, enter player's name! ");

    }
    else if(s1<0||s2<0){
        alert("The number of goals cannot be less than 0. ");
    }
    else {
        compare(s1, s2);
        getPlayers(p1, 1);
        getPlayers(p2, 2);
        findCombinations(s1);
        document.getElementById("result").innerHTML += " The score list of team 1 can be " + st.slice(0, st.length - 2) + "<br>";
        st = "";
        findCombinations(s2);
        document.getElementById("result").innerHTML += " and the score list of team 2 is  " + st.slice(0, st.length - 2);
    }

}
document.getElementById("submit").addEventListener("click", calculate);//Add Event Listener to my button








