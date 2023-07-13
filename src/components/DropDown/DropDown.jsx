import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import CorrectIcon from "../CorrectIcon/CorrectIcon";
import ArrowUpIcon from "../ArrowUpIcon/ArrowUpIcon";


const DropDown = ({ data, handleChanges }) => {
  const [selected, setSelected] = useState(data[0]);
  //   handleChanges(selected.name)

  useEffect(() => {
    handleChanges("most upvotes");
  }, [handleChanges]);

  const handleOptionChanges = (e) => {
    // console.log(e)
    setSelected(e);
    handleChanges(e);
  };
  return (
    <div className='flex items-center flex-auto'>
      <p className='text-white opacity-75'>Sort by : </p>
      <Listbox
        value={selected}
        onChange={handleOptionChanges}
      >
        <div className='relative'>
          <Listbox.Button className='relative w-full py-2 pl-3 pr-10 text-left rounded-lg cursor-pointer focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
            <span className='block text-gray-400 truncate'>{selected}</span>
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
              <ArrowUpIcon
                className='text-gray-400 '
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute w-64 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {data.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-pointer border-b-[1px] last-of-type:border-b-0 hover:text-purple-light select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                          <CorrectIcon aria-hidden='true' />
                        </span>
                      ) : null}
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>{person}</span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
export default DropDown;
