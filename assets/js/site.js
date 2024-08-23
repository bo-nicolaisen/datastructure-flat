// write cool JS hwere!!
let myData = [] // array der indeholder alle list descriptions


makeDummyData()
console.table(myData);

buildCalender()

findItems(2)



function buildCalender() {


    // dom element
    let calElement = document.getElementById('calender')

    // tømmer dom elementet
    calElement.innerHTML = ''

    // tekst variabel indeholdende html
    let MyHtml = `<ul>`


    for (let index = 0; index < 10; index++) {
        MyHtml += `<li onclick="calCallback(${index})">${index}</li>`
    }


    MyHtml += `</ul>`

    calElement.innerHTML = MyHtml

}

function calCallback(index) {
    findItems(index)
}

// modtager et navn og opretter list item i første to do list

function makeItem(myName, startDate, duration) {

    let myListItem = {
        startDate: startDate,
        completionDate: startDate + duration,
        name: myName,
        status: true
    }

    myData.push(myListItem)
}



// modtager et index for listen, og et index for item, og fjerner dette item fra listen.

function removeItem(itemIndex) {



}



function findItems(tag) {

    let myTaggedData = []

    myData.forEach(element => {

        if (element.startDate == tag) {

            myTaggedData.push(element)

        }
    });


    showList(myTaggedData, tag)


}





function showList(mydata, tag) {

    // data


    // dom element
    let myListElement = document.getElementById('listElement')

    // tømmer dom elementet
    myListElement.innerHTML = ''

    // tekst variabel indeholdende html
    let MyHtml = `<h2>${tag}</h2><ul>`



    mydata.forEach((listItem, index) => {


        MyHtml += `<li onclick="itemCallBack(${index})">${listItem.name} completion:${listItem.completionDate}</li>`

    });

    MyHtml += `</ul>`

    myListElement.innerHTML = MyHtml



}

function itemCallBack(indexClicked) {


    alert('clicked: ' + indexClicked)

    removeItem(0, indexClicked)
    //console.log(myData[0]);

    // opdater view
    showList(0)

}


//----------------------------------------------------------------------

function makeDummyData() {


    for (let index = 0; index < 20; index++) {

        makeItem('task ' + index, Math.floor(Math.random() * 10), Math.floor(Math.random() * 4))

    }



}
