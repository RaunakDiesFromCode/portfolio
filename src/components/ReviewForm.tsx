import { useState } from "react";
import { useForm } from "react-hook-form";
import { Star } from "lucide-react";
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

export function ReviewDialog() {
    const [loading, setLoading] = useState(false);
    const [rating, setRating] = useState(0);
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);

    const form = useForm({
        defaultValues: {
            name: "",
            contact: "",
            review: "",
            rating: 0,
            newsletter: false,
            email: "",
        },
    });

    interface FormData {
        name: string;
        contact: string;
        review: string;
        rating: number;
        newsletter: boolean;
        email: string;
    }

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        setError("");

        // Manual validation
        if (!data.name || data.name.length < 2) {
            setError("Name must be at least 2 characters");
            setLoading(false);
            return;
        }

        if (!data.contact || data.contact.length < 5) {
            setError("Please enter a valid email or phone number");
            setLoading(false);
            return;
        }

        if (!data.review || data.review.length < 10) {
            setError("Review must be at least 10 characters");
            setLoading(false);
            return;
        }

        if (!data.rating || data.rating < 1) {
            setError("Please select a rating");
            setLoading(false);
            return;
        }

        // Check if newsletter is selected and validate email
        if (
            data.newsletter &&
            (!data.email ||
                !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(
                    data.email
                ))
        ) {
            setError("Please enter a valid email address");
            setLoading(false);
            return;
        }

        try {
            const sanitizedData = {
                ...data,
                email: data.newsletter ? data.email : null, // Only include email if newsletter is true
            };

            const response = await fetch("/api/reviews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(sanitizedData),
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
            setError("An unexpected error occurred." + err);
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
                        You must have something nice to write, don&appos;t you?
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        {/* Name Field */}
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
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* Social Handle Field */}
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
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* Review Field */}
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

                        {/* Rating Field */}
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
                                                        form.setValue(
                                                            "rating",
                                                            star
                                                        );
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

                        {/* Email Field */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-300 flex items-center gap-3">
                                        Your Email
                                        <FormMessage />
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your email"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* Newsletter Checkbox */}
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
                                            Subscribe to newsletter?
                                        </FormLabel>
                                    </div>
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            variant="outline"
                            disabled={loading}
                            className="w-full border-2 hover:bg-input"
                        >
                            {loading ? "Submitting..." : "Review!"}
                        </Button>

                        {/* Error Display */}
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
