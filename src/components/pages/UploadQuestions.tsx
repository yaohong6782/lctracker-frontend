import React from "react";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { UploadSchema } from "@/zodSchema/upload";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
const UploadQuestions = () => {
  const form = useForm<z.infer<typeof UploadSchema>>({
    resolver: zodResolver(UploadSchema),
    defaultValues: {
      questionNumber: "",
      title: "",
      url: "",
      content: "",
    },
  });

  // place holder
  const onSubmit = (values: z.infer<typeof UploadSchema>) => {
    console.log(values);
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid justify-center"
        >
          <h2 className="text-2xl underline flex justify-center">Upload</h2>
          <FormField
            control={form.control}
            name="questionNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex justify-center">
                  Question Number
                </FormLabel>
                <FormControl className="lg:w-96 flex items-center justify-content-center md:w-72">
                  <Input type="text" placeholder="Question Number" {...field} />
                </FormControl>
                <FormDescription>asdf</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Title of problem"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
};

export default UploadQuestions;
