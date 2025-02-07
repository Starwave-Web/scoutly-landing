"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send } from "../icons";

const SignUpForm = () => {
  const { toast } = useToast();

  const formSchema = z.object({
    "form-name": z.string().default("sign-up"),
    "bot-field": z.string().optional(),
    subject: z.string().default("New Sign-Up"),
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Too short to be a valid email!")
      .max(50, "Too much characters!"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "form-name": "sign-up",
      "bot-field": "",
      subject: "New Sign-Up",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          const value = values[key as keyof typeof values] ?? "";
          formData.append(key, value.toString());
        }
      }
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (res.status === 200) {
        form.reset();
        toast({
          title: "Successful subscription",
          description: "We will keep you updated with our latest news!",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "Please try again later.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again later.",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        name="sign-up"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <FormField
          control={form.control}
          name="form-name"
          render={({ field }) => (
            <FormItem>
              <Input type="hidden" {...field} value="sign-up" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bot-field"
          render={({ field }) => (
            <FormItem>
              <Input type="hidden" {...field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <Input type="hidden" {...field} value="New Sign-Up" />
            </FormItem>
          )}
        />
        <div className="relative">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="bg-white placeholder:text-primary-grey text-black rounded-[4px] px-[22px] py-[13px] min-h-[50px]"
                    placeholder="Your email adddress"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="bg-secondary-blue rounded-[4px] max-h-[46.5px] absolute top-0.5 right-0.5 hover:bg-[#38AFAF] active:bg-[#2C9F9F]"
            variant="secondary"
            type="submit"
          >
            <Send />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
