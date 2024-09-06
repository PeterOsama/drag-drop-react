## Simple drag and drop example

![alt text](https://raw.githubusercontent.com/PeterOsama/drag-drop-react/main/public/Animation.gif)

# 1- DragAndDrop.tsx:

Drag and drop inside the same list.

Drag Start (onDragStart):

When a user starts dragging an item, the dragStartHandler is called, storing the id of the dragged item in itemRef.current.
Drag Enter (onDragEnter):

As the user drags the item over another item, the dragEnterHandler is called, storing the id of the item being dragged over in dragOverItem.current.
Drop (onDragEnd):

When the user releases the dragged item, the dropHandler is invoked:
It finds the items corresponding to the ids stored in itemRef.current and dragOverItem.current.
The items' positions in the data array are swapped.
The state is updated with the new order, causing the list to re-render with the items in their new positions.

# 2- DragAndDropBetweenTwoLists.tsx

drap and drop items between different lists
handle empty list scenario

In the previous example, the logic assumed that the list always contains items, so

```javascript
  onDragEnter={(e) => dragEnterHandler(e)}
```

was used. However, when dealing with multiple lists, some lists might be empty. Therefore,

```javascript
onDragEnter={(e) => dragListEnterHandler(e)}
```

function is needed to handle cases where the list is empty.
