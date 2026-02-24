import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useInitials } from '@/hooks/use-initials';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import * as React from 'react';
import { Separator } from '@radix-ui/react-separator';

interface AdminHeaderProps {
    isCollapsed: boolean;
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AdminHeader({ isCollapsed, setIsCollapsed }: AdminHeaderProps) {
    const { auth } = usePage<SharedData>().props;
    const getInitials = useInitials();
    const admin = auth.admin;

    return (
        <header className="flex h-16 bg-background shrink-0 items-center gap-2 border-b border-sidebar-border/50 px-6 transition-all ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <Button
                variant="outline"
                size="icon"
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                {isCollapsed ? <ChevronsRight className="h-4 w-4" /> : <ChevronsLeft className="h-4 w-4" />}
            </Button>

            <div className="ml-auto flex items-center space-x-2">
                <div className="relative flex items-center space-x-1">
                
                    <Separator orientation="vertical"/>
              
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="size-10 rounded-full p-1"
                        >
                            <Avatar className="size-8 overflow-hidden rounded-full">
                                <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                                    {getInitials(admin?.name ?? 'Admin')}
                                </AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end">
                        <DropdownMenuLabel>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium">{admin?.name ?? 'Admin'}</span>
                                <span className="text-xs text-muted-foreground">{admin?.email ?? ''}</span>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href="/admin/logout" method="post" className="w-full">
                                Logout
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

        </header>
    );
}