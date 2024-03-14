
const conversation = () => {
  return (<>
    <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user avator" />
            </div>
        </div>

        <div className="flex flex-col flex-1">
            <div className="flex gap-2 justify-between">
                <p className="font-bold text-gray-200">Bob Bobber</p>
                <span className="text-xl">🥴</span>
            </div>
        </div>
    </div>
    <div className="divider my-0 py-0 h-1" />
    </>
  )
}

export default conversation