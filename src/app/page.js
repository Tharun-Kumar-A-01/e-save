import Image from "next/image";

const states = [
  {
    id:1,
    name: 'Tamil Nadu',
    value: 'tamilnadu'
  },
  {
    id:2,
    name: 'Kerala',
    value: 'kerala'
  },
  {
    id:3,
    name: 'Karnataka',
    value: 'karnataka'
  },
  {
    id:4,
    name: 'Andhra Pradesh',
    value: 'andhrapradesh'
  },
  {
    id:5,
    name: 'Pudhuchery',
    value: 'pudhuchery'
  },
]

export default function Home() {
  return (
    <div className="h-full">
      <div className="flex flex-col gap-2 text-background t">
        <select className=" rounded-md py-1 px-2 w-80">
          {states.map((state)=>(
            <option key={state.id} value={state.value}>{state.name}</option>
          ))}
        </select>
        <input placeholder="Units" className="w-80"/>
      </div>
    </div>
  );
}
