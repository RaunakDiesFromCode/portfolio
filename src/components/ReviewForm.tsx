"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Star } from "lucide-react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const reviewSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  contact: z.string().min(5, "Please enter a valid email or phone number"),
  review: z.string().min(10, "Review must be at least 10 characters"),
  rating: z.number().min(1, "Please select a rating"),
  newsletter: z.boolean().default(false),
});

export function ReviewDialog() {
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: "",
      contact: "",
      review: "",
      rating: 0,
      newsletter: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof reviewSchema>) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Review submitted successfully!", {
          description: "Thank you for your feedback!",
        });

        form.reset();
        setRating(0);
        setOpen(false); // Close the dialog
      } else {
        setError(result.error || "An error occurred.");
        toast.error("Failed to submit review", {
          description: result.error || "Please try again.",
        });
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      toast.error("Unexpected error", {
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-full px-8">
          Review Me!
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] ">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold">
            Review Me!
          </DialogTitle>
          <DialogDescription className="text-center text-gray-400">
            You must have something nice to write dont you?
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300 flex items-center gap-3">
                    You are?
                    <FormMessage />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      className=" "
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300 flex items-center gap-3">
                    Your Social Handle
                    <FormMessage />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your social handle"
                      {...field}
                      className=" "
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="review"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300 flex items-center gap-3">
                    Write something please!
                    <FormMessage />
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your review"
                      className="min-h-[120px] border-input "
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rating"
              render={() => (
                <FormItem>
                  <div className="flex gap-1 items-center flex-col justify-center">
                    <span className="text-foreground/70 text-xs flex items-center gap-3">
                      Star me!
                      <FormMessage />
                    </span>
                    <div>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => {
                            setRating(star);
                            form.setValue("rating", star);
                          }}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`w-6 mx-0.5 h-6 ${
                              star <= rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-500"
                            } transition-colors`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="newsletter"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="border-gray-500 data-[state=checked]:bg-blue-600"
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal text-gray-300">
                      Sub for a newsletter?
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              variant="outline"
              disabled={loading}
              className="w-full border-2 hover:bg-input"
            >
              {loading ? "Submitting..." : "Review!"}
            </Button>

            {error && (
              <p className="text-red-400 border-red-400 text-sm text-center">
                {error}
              </p>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
