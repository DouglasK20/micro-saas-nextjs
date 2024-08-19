'use client'
/**
* v0 by Vercel.
* @see https://v0.dev/t/79acuLu3Daw
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useForm } from "react-hook-form"


export function AuthForm() {
    const form = useForm()

    const handleSubmit = form.handleSubmit((data) => {
        console.log(data)
    })

    return (
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-2 text-center">
                    <CardTitle className="text-3xl font-bold">Login</CardTitle>
                    <CardDescription>Digite seu e-mail abaixo e enviaremos um link para fazer login.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" required {...form.register('email')} />
                        </div>
                        <Button type="submit" className="w-full">
                            Send Link
                        </Button>
                    </form>
                    <p className="mt-4 text-center text-sm text-muted-foreground">
                        Ao clicar em "Enviar link", você concorda com nossos {" "}
                        <Link href="#" className="underline" prefetch={false}>
                            Terms of Service
                        </Link>
                        and{" "}
                        <Link href="#" className="underline" prefetch={false}>
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}