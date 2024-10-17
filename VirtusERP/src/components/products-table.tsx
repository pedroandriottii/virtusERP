import { MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const mockProducts = [
    {
        id: 1,
        name: "Laser Lemonade Machine",
        status: "draft",
        price: 499.99,
        totalSales: 25,
        createdAt: "2023-07-12 10:42 AM",
        image: "/placeholder.svg?height=64&width=64"
    },
    {
        id: 2,
        name: "Hypernova Headphones",
        status: "active",
        price: 129.99,
        totalSales: 100,
        createdAt: "2023-10-18 03:21 PM",
        image: "/placeholder.svg?height=64&width=64"
    }
]

export function ProductsTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="sr-only">Image</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden md:table-cell">Price</TableHead>
                    <TableHead className="hidden md:table-cell">Total Sales</TableHead>
                    <TableHead className="hidden md:table-cell">Created at</TableHead>
                    <TableHead>
                        <span className="sr-only">Actions</span>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {mockProducts.map((product) => (
                    <TableRow key={product.id}>
                        <TableCell className="hidden sm:table-cell">
                            <img
                                alt="Product image"
                                className="aspect-square rounded-md object-cover"
                                height="64"
                                src={product.image}
                                width="64"
                            />
                        </TableCell>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>
                            <Badge variant={product.status === "draft" ? "secondary" : "outline"}>
                                {product.status}
                            </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                            ${product.price}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                            {product.totalSales}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                            {product.createdAt}
                        </TableCell>
                        <TableCell>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        aria-haspopup="true"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}