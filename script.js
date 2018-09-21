(function () {
        "use strict";
        window.onload = function () {
            //Add event listener here!	
            var button = document.getElementById('btn');
            button.addEventListener('click', AddRow);

            function AddRow() {
                var list = document.getElementById("list");
                var row = document.createElement("tr");
                var cell = document.createElement("td");
                var text = document.createTextNode("added");

                var name = document.getElementById("name").value;
                var price = document.getElementById("price").value;

                cell.appendChild(text);
                row.appendChild(cell);
                list.appendChild(row);

                CreateInnerHTML(name, price, row);
                UpdateTotal();

            }

            function CreateInnerHTML(name, price, row) {
             
                var cell2 = document.createElement("td");
                var cell3 = document.createElement("td");

                var text2 = document.createTextNode(name);
                var text3 = document.createTextNode(price);

                cell2.appendChild(text2);
                row.appendChild(cell2);
                
                cell3.appendChild(text3);
                row.appendChild(cell3);
             
            }

            function UpdateTotal() {

                var table = document.getElementById("table"),
                    sumVal = 0;
               
               

                for (var i = 1; i < table.rows.length; i++) {
                    alert(sumVal);
                    
                    sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHTML);
                }
                if (isNaN(sumVal)) {
                    sumVal= parseFloat(sumVal);
                }
               
                document.getElementById("totalPrice").innerHTML = sumVal;
            }
        }
    }
    ());


