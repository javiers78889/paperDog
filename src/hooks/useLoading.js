import  { useEffect, useState } from 'react'

export const useLoading = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000); // Carga durante 3 segundos

        return () => clearTimeout(timer); // Limpiar el timer al desmontar
    }, []);
    return {
        isLoading

    }
}
