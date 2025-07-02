import { Loader2Icon, SaveIcon } from "lucide-react";
import { Button } from "./ui/button";

type SavaButtonProps = {
    isPending: boolean;
}
export function SaveButton({ isPending }: SavaButtonProps) {

    return (
        <>
            <Button type="submit">
                {isPending ? 
                <><Loader2Icon className="animate-spin" />Aguarde</> :
                 <><SaveIcon />Salvar</>}
                
            </Button>
        </>
    )
}