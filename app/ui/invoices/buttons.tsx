"use client";

import { deleteInvoice } from "@/app/lib/actions";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

function DeleteSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="destructive"
      type="submit"
      disabled={pending}
      className="min-w-32"
    >
      {pending ? "Menghapus..." : "Delete Invoice"}
    </Button>
  );
}

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const action = deleteInvoice.bind(null, id);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="rounded-md border p-2 hover:bg-gray-100"
          aria-label="Delete"
        >
          <TrashIcon className="w-5" />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Hapus Invoice</DialogTitle>
          <DialogDescription>
            Tindakan ini tidak dapat dibatalkan. Invoice akan dihapus permanen
            dari database.
          </DialogDescription>
        </DialogHeader>

        <form action={action}>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <DeleteSubmitButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
