import React, { useRef, useState } from 'react';

export const DragDrop = () => {
  const itemRef = useRef();
  const dragOverItem = useRef();
  const [data, setData] = useState([
    {
      id: '11',
      title: 'test 1',
    },
    {
      id: '12',
      title: 'test 2',
    },
    {
      id: '13',
      title: 'test 3',
    },
    {
      id: '14',
      title: 'test 4',
    },
  ]);
  const dragStartHandler = (e) => {
    itemRef.current = e.target.id;
  };
  const dragEnterHandler = (e) => {
    dragOverItem.current = e.currentTarget.id;
  };

  const dropHandler = () => {
    const tempdata = [...data];
    const itemContent = tempdata.find((item) => item.id === itemRef.current);
    const itemIndex = tempdata.indexOf(itemContent);
    const desiredItemContent = tempdata.find((item) => item.id === dragOverItem.current);
    const desiredItemIndex = tempdata.indexOf(desiredItemContent);
    [tempdata[itemIndex], tempdata[desiredItemIndex]] = [
      tempdata[desiredItemIndex],
      tempdata[itemIndex],
    ];
    setData(tempdata);
  };
  return (
    <div className="border-solid border-2 border-yellow-600">
      <h2> list one </h2>
      {data.map((item) => (
        <div
          className="border-solid border-2 border-indigo-600 rounded m-2 px-3 py-1 cursor-pointer"
          key={item.id}
          id={item.id}
          draggable
          onDragStart={(e) => dragStartHandler(e)}
          onDragEnter={(e) => dragEnterHandler(e)}
          onDragEnd={dropHandler}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};
