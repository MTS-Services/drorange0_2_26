import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AdminLayout from '@/layouts/admin-layout';
import { Head, Link } from '@inertiajs/react';
import React from 'react';

type Message = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  seen: boolean;
  created_at: string;
  updated_at: string;
};

interface Props {
  message: Message;
}

export default function Show({ message }: Props) {
  return (
    <AdminLayout activeSlug="contact">
      <Head title="Message Details" />

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Message Details</h1>
        <Link href={route('admin.pm.contact.index')}>
          <Button>Back to Messages</Button>
        </Link>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{message.subject}</h2>
            <div className="flex items-center gap-2 mt-2">
              <Badge
                variant={message.seen ? "default" : "destructive"}
                className={message.seen ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
              >
                {message.seen ? "Seen" : "Unseen"}
              </Badge>
              <span className="text-sm text-gray-500">
                Received: {new Date(message.created_at).toLocaleDateString()} at {new Date(message.created_at).toLocaleTimeString()}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium">{message.name}</p>
                  </div>

                  <div className="grid gap-2">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{message.email}</p>
                  </div>

                  {message.phone && (
                    <div className="grid gap-2">
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">{message.phone}</p>
                    </div>
                  )}

                  <div className="grid gap-2">
                    <p className="text-sm text-muted-foreground">Subject</p>
                    <p className="font-medium">{message.subject}</p>
                  </div>

                  <div className="grid gap-2">
                    <p className="text-sm text-muted-foreground">Message</p>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="whitespace-pre-wrap">{message.message}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Message Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <div>Message ID</div>
                    <div className="font-medium text-foreground">#{message.id}</div>
                  </div>
                  <div>
                    <div>Received At</div>
                    <div className="font-medium text-foreground">
                      {new Date(message.created_at).toLocaleDateString()} at {new Date(message.created_at).toLocaleTimeString()}
                    </div>
                  </div>
                  {message.updated_at !== message.created_at && (
                    <div>
                      <div>Last Updated</div>
                      <div className="font-medium text-foreground">
                        {new Date(message.updated_at).toLocaleDateString()} at {new Date(message.updated_at).toLocaleTimeString()}
                      </div>
                    </div>
                  )}
                  <div>
                    <div>Status</div>
                    <div className="font-medium text-foreground">
                      <Badge
                        variant={message.seen ? "default" : "destructive"}
                        className={message.seen ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                      >
                        {message.seen ? "Seen" : "Unseen"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-2">
                  <div className="flex flex-col gap-3">
                    <Link href={route('admin.pm.contact.index')} className="w-full">
                      <Button className="w-full">Back to Messages</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
