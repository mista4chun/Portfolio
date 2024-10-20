function Header() {
  return (
    <div className="flex items-center px-2">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-yellow-200"></div>
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
      </div>
     
        <h1 className="rounded-md border border-gray-800 mx-auto px-12 text-sm my-0.5">Mista4chun - Visual Studio Code</h1>
     
    </div>
  );
}

export default Header;
