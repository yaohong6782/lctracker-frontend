import React, { useState } from "react";

import * as z from "zod";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { roleList } from "@/constants/roleList";

import { RegistrationSchema } from "@/zodSchema/registration";
import { Link } from "react-router-dom";

const Registration = () => {
  const form = useForm<z.infer<typeof RegistrationSchema>>({
    resolver: zodResolver(RegistrationSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegistrationSchema>) => {
    console.log(values);
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="flex h-screen">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid justify-center m-auto"
        >
          <h1 className="text-3xl font-bold underline">Registration</h1>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Email" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    autoComplete="on"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex flex-row w-full">Role</FormLabel>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full justify-between"
                    >
                      {field.value
                        ? roleList.find((role) => role.value === field.value)
                            ?.label
                        : "Select role"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search roles" />
                      <CommandEmpty>No role found.</CommandEmpty>
                      <CommandGroup>
                        {roleList.map((role) => (
                          <CommandItem
                            key={role.value}
                            //   onSelect={(currentValue) => {
                            //     setValue(
                            //       currentValue === value ? "" : currentValue
                            //     );
                            //     setOpen(false);
                            //   }}
                            onSelect={() => {
                              form.setValue("role", role.value);
                              form.clearErrors("role"); // Clear the "role" field's error
                              setOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value === role.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {role.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Roles will be subjected to approval
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Register</Button>
          <FormDescription>
            Already have an account?{" "}
            <Link to="/login">
              <span className="font-bold underline">Sign in</span>
            </Link>
          </FormDescription>
        </form>
      </Form>
    </div>
  );
};

export default Registration;
