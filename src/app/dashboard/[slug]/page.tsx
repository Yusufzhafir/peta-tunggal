import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { CalendarDays, CircleUser, FileBadge, Pin } from "lucide-react";

const Page = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="min-h-dvh py-4 px-20">
                <h1 className="text-3xl font-bold">This is the detail area</h1>
                <div className="w-full">
                    <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus, lorem a commodo elementum, ex ipsum cursus erat, quis posuere sapien mi eget tortor. Etiam luctus consectetur felis, ut pharetra neque aliquet eu. Sed convallis erat sed tellus feugiat fermentum. Nullam tellus ante, sodales ut tempor ac, accumsan non enim. Phasellus egestas arcu odio, ut vehicula purus egestas ac. Ut facilisis rutrum fermentum. Sed a rhoncus mi. Aenean finibus turpis at congue commodo. Nullam iaculis at lorem quis ultricies. Suspendisse sed ullamcorper magna, eget vehicula ligula. Vestibulum scelerisque sem mi, porta vehicula lectus sodales eu. </p>
                    <div className="py-8 font-medium space-y-5">
                        <div className="flex gap-8">
                            <div className="flex">
                                Location is at
                                <Pin />
                                :
                            </div>
                            <div>Kebon Jeruk, Jakarta Barat, DKI Jakarta</div>
                        </div>

                        <div className="flex gap-8">
                            <div className="flex">
                                Representative
                                <FileBadge />
                                :
                            </div>
                            <div>Shadiq</div>
                        </div>

                        <div className="flex gap-8">
                            <div className="flex">
                                Owner is {" "}
                                <CircleUser />
                                :
                            </div>
                            <div>Jusup</div>
                        </div>

                        <div className="flex gap-8">
                            <div className="flex">
                                Requested at
                                <CalendarDays />
                                :
                            </div>
                            <div>2, Desember 2024</div>
                        </div>
                        
                        <div className="flex gap-8">
                            <div className="flex">
                                Issued at
                                <CalendarDays />
                                :
                            </div>
                            <div>11, Januari 2025</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Page;