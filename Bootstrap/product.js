// define data in JSON array
var products = [
    
    {
        quantity: "10",
        item: "Kidney",
        ppu: "500",
        discount: "50"
    },
    {
        quantity: "2",
        item: "Heart",
        ppu: "1000",
        discount: "150"
    }
    
]

// This function will pick the value from the <selet>
// and add to the table

function clearTable() {
    $("#productBody").empty();
    document.getElementById("gross").innerHTML=""
    loadData()
    $('#productBody').html("")

}
function addProduct() {

    let productObj = {
        item: $('#products').val(),
        quantity: $('#qty').val(),
        ppu: $('#ppu').val(),
        discount: $('#discount').val(),
    }
    

    // Clear existing items in the table
    // let productList = document.getElementById("productList")
    // for (let x = 0; x < products.length; x++) {
    //     productList.deleteRow(1)
    // }
    $('#productBody').html("")

    products.push(productObj)
    loadData()
}


// TODO Should use product ID instead of name
function deleteProduct(index) {
    console.log("DELETE",index)
    delete products[index]  // delete the element from array
    $('#productBody').html("")
    loadData()
}

function loadData() {
    let allRows = ""
    let gross = 0
    let totaldiscount = 0
    let subdiscount = 0
    for (let p in products) {
        // console.log(p)
        let cellItem = `<tr><td><img style="width: 1.5em;" src='sign-delete-icon.png' onclick='deleteProduct("${p}")'> ` + products[p].item + "</td>"
        let cellQuantity = '<td class="text-right">' + products[p].quantity + "</td>"
        let cellPPU = '<td class="text-right">' + products[p].ppu + "</td>"
        let total = products[p].ppu * products[p].quantity
        gross += total
        let cellTotal = '<td class="text-right">' + total + "</td>"
        let cellDiscount = '<td class="text-right">' + products[p].discount + "</td>"
        //let fdiscount = (0 + products[p].discount)
        totaldiscount += parseInt(products[p].discount)
        subdiscount = gross - totaldiscount
        let row = `<tr>${cellItem}${cellQuantity}${cellPPU}${cellDiscount}${cellTotal}</tr>`
        allRows += row
    }

    $('#productBody').html(allRows)

    $("#gross").html(gross)
    $("#dis").html(totaldiscount)
    $('#sub').html(subdiscount)

}

function loadDataOld() {

    // $('#productBody').html('<tr><td>xxx</td><td>xxx</td><td>xxx</td><td>xxx</td></tr>')
    
    let productList = document.getElementById("productList")
    let gross = 0
    for (let p in products) {
        let row = document.createElement("tr")
        let productName = document.createElement("td")
        productName.innerHTML = products[p].name

        let quantity = document.createElement("td")
        quantity.innerHTML = products[p].quantity
        quantity.classList.add("text-right")

        let ppu = document.createElement("td")
        ppu.innerHTML = products[p].ppu
        ppu.classList.add("text-right")

        let total = document.createElement("td")
        total.innerHTML = products[p].ppu * products[p].quantity
        total.classList.add("text-right")
        gross += products[p].ppu * products[p].quantity


        row.appendChild(productName)
        row.appendChild(quantity)
        row.appendChild(ppu)
        row.appendChild(total)
        productList.appendChild(row)
    }

    let grossElem = document.getElementById("gross")
    grossElem.innerHTML = gross

    let discountelm = document.getElementById("dis")
    discountelm.innerHTML = dis

}