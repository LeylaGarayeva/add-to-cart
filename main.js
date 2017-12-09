var itemCount = 0;
function allowDrop(event)
{
  event.preventDefault();
}

function drag(event)
{   event.dataTransfer.setData("Item",event.target.id);
}

function drop(event)
{
  itemCount = itemCount + 1;
  event.preventDefault();
  var data=event.dataTransfer.getData("Item");
  $targetElement = document.getElementById('target-grid');
  $selectedElement = document.getElementById(data);
  $targetElement.appendChild($selectedElement);
  document.getElementById('itemcount').innerHTML = (itemCount+" Items");
  $selectedElement.innerHTML += "<i class='icon-remove' data-item="+data+"></i>"; 
}