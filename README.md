## Simple drag and drop example

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

in previous example it depended on that the list is always contains items, thus for 
  onDragEnter={(e) => dragEnterHandler(e)}
  used but with multiple lists it can be an empty list so dragListEnterHandler function needed
