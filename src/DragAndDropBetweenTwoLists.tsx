import React, { useRef, useState } from 'react';

export const DragAndDropBetweenTwoLists = () => {
  const itemRef = useRef();
  const dragOverItem = useRef();
  const dragOverList = useRef();

  const [data, setData] = useState([
    [
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
    ],
    [
      {
        id: '21',
        title: 'test list 2 item 1',
      },
      {
        id: '22',
        title: 'test list 2 item 2',
      },
      {
        id: '23',
        title: 'test list 2 item 3',
      },
      {
        id: '24',
        title: 'test list 2 item 4',
      },
    ],
    [
      {
        id: '31',
        title: 'test list 3 item 1',
      },
      {
        id: '32',
        title: 'test list 3 item 2',
      },
      {
        id: '33',
        title: 'test list 3 item 3',
      },
      {
        id: '34',
        title: 'test list 3 item 4',
      },
    ],
  ]);

  const dragStartHandler = (e) => {
    itemRef.current = e.target;
  };

  const dragItemEnterHandler = (e) => {
    dragOverItem.current = e.currentTarget;
  };

  const dragListEnterHandler = (e) => {
    dragOverList.current = e.currentTarget.id;
  };

  const dropHandler = () => {

    //source list equals destination return
    if (itemRef.current.parentElement.id - 1 === dragOverList.current - 1) return;
    const tempdataSource = [...data[itemRef.current.parentElement.id - 1]];
    const tempDataDestination = [...data[dragOverList.current - 1]];

    const itemContent = tempdataSource.find((item) => item.id === itemRef.current.id);
    const itemIndex = tempdataSource.indexOf(itemContent);
    tempdataSource.splice(itemIndex, 1);

    const desiredItemContent = tempDataDestination.find(
      (item) => item.id === dragOverItem.current.id,
    );

    const desiredItemIndex = tempDataDestination.indexOf(desiredItemContent);
    tempDataDestination.splice(desiredItemIndex, 0, itemContent);

    setData((prevData) => {
      const newData = [...prevData];
      newData[itemRef.current.parentElement.id - 1] = tempdataSource;
      newData[dragOverList.current - 1] = tempDataDestination;
      console.log(newData);
      return newData;
    });
  };
  return (
    <div className=" mx-5 flex gap-5">
      <div
        className="border-solid border-2 border-yellow-600 p-3"
        id="1"
        onDragEnter={(e) => dragListEnterHandler(e)}
      >
        <h2> list one </h2>
        {data[0].map((item) => (
          <div
            className="border-solid border-2 border-indigo-600 rounded m-2 px-3 py-1 cursor-pointer"
            key={item.id}
            id={item.id}
            draggable
            onDragStart={(e) => dragStartHandler(e)}
            onDragEnter={(e) => dragItemEnterHandler(e)}
            onDragEnd={dropHandler}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div
        className="border-solid border-2 border-yellow-600 p-3"
        id="2"
        onDragEnter={(e) => dragListEnterHandler(e)}
      >
        <h2> list two </h2>
        {data[1].map((item) => (
          <div
            className="border-solid border-2 border-indigo-600 rounded m-2 px-3 py-1 cursor-pointer"
            key={item.id}
            id={item.id}
            draggable
            onDragStart={(e) => dragStartHandler(e)}
            onDragEnter={(e) => dragItemEnterHandler(e)}
            onDragEnd={dropHandler}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div
        className="border-solid border-2 border-yellow-600  p-3"
        id="3"
        onDragEnter={(e) => dragListEnterHandler(e)}
      >
        <h2> list three </h2>
        {data[2].map((item) => (
          <div
            className="border-solid border-2 border-indigo-600 rounded m-2 px-3 py-1 cursor-pointer"
            key={item.id}
            id={item.id}
            draggable
            onDragStart={(e) => dragStartHandler(e)}
            onDragEnter={(e) => dragItemEnterHandler(e)}
            onDragEnd={dropHandler}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};
