import { useState } from "react"
import { Button } from "@/components/ui/button"
import Toast from "@/components/shared/Toast"
import { useNavigate } from "react-router"

const WithDraw = () => {
  const navigator = useNavigate()
  const [showToast, setShowToast] = useState(false)

  function handleClick() {
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
      navigator("/")
    }, 3000)
  }

  return (
    <section className="mt-10 space-y-8">
      <h2 className="text-2xl font-bold">Withdraw Amount</h2>

      <div className="space-y-2">
        <p>
          Available Balance: <span className="font-bold">+ $44,340</span>
        </p>
        <p>
          Minimum Withdrawal: <span className="font-bold">$40,340</span>
        </p>
      </div>

      <label htmlFor="EnterAmount" className="flex flex-col gap-2">
        <span className="text-2xl font-semibold">Enter amount</span>
        <input
          type="text"
          id="EnterAmount"
          placeholder="ex: $40,340"
          className="w-1/4 rounded-md border border-gray-400 p-4"
        />
      </label>

      <p className="text-gray-500">
        You can withdraw any amount between $40,340 and $44,340
      </p>

      <Button
        onClick={handleClick}
        className="w-1/4 bg-green-500 text-lg font-semibold hover:bg-green-600"
      >
        Next
      </Button>

      {showToast && (
        <div className="fixed bottom-4 right-4">
          <Toast />
        </div>
      )}
    </section>
  )
}

export default WithDraw
