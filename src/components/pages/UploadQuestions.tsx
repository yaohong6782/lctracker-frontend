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
      <div className="flex h-screen">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* 
            
            
            */}
          </form>
        </Form>
      </div>
    </>
  );
};

export default UploadQuestions;
