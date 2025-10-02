"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/shadcn-io/dialog"
import { Textarea } from "@/components/ui/shadcn-io/textarea"
import type { ReviewPopupProps } from "@/types/Sylvia/types"
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating"


export default function ReviewPopup({ open, onClose, onSubmitSuccess }: ReviewPopupProps) {
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState("")

    const handleSubmit = () => {
        console.log({ rating, review }) // replace with API call
        onSubmitSuccess()
        onClose()
    }
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <div className="relative z-50">
                <DialogContent
                    className="sm:max-w-lg p-6 fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                >


                    <DialogHeader>
                        <DialogTitle className="text-center text-blue-600">
                            Give Feedback
                        </DialogTitle>
                    </DialogHeader>

                    {/* Rating */}
                    <Rating value={rating} onValueChange={setRating} className="justify-center mb-4">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <RatingButton key={index} className="text-warning-500" />
                        ))}
                    </Rating>

                    {/* Review */}
                    <label className="block text-sm mb-2">Write your opinion?</label>
                    <Textarea
                        placeholder="Additional feedback"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        className="mb-4"
                    />

                    {/* Submit */}
                    <div className="flex justify-center">
                        <Button onClick={handleSubmit} className="px-6">
                            Submit
                        </Button>
                    </div>
                </DialogContent>
            </div>
        </Dialog>
    )
}


