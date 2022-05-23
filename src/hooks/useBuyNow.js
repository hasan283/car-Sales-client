import { useEffect, useState } from "react";

const useBuyNow = buyNowId => {
    const [parts, setParts] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/parts/${buyNowId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data));
    }, [buyNowId]);

    return [parts, setParts]

}

export default useBuyNow;