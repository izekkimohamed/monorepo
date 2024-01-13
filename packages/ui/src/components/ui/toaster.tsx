"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@ui/components/ui/toast";
import { useToast } from "@ui/components/ui/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1 ">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription className="text-2xl font-bold">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="text-lg font-bold" />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
