import useAxiosFunction from "@hooks/useAxios";
import { useEffect, useState, useRef } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";



export function InfinityScrolling({
    style,
    renderItem,
    apiInstance, 
    uri, 
    horizontal = true,
    context = {
        method: "GET",
        data: [],
        current: 0,
        paramsName: "page",
        next: (prev: number): number => { return prev + 1}
    }
} : any) {

    const [isFirstPageReceived, setIsFirstPageReceived] = useState(false);
    const next = useRef<any>(context.current);
    const [dataToRender, setDataToRender] = useState<any>([]);
    const [response, error, isLoading, fetch] = useAxiosFunction();
    const [end, setEnd] = useState(false);

    useEffect(() => {
        fetch({
            axiosInstance: apiInstance,
            method: context.method, 
            url: uri+"?"+context.paramsName+"="+context.current, 
            requestConfig: context.data
        });
    }, []);

    
    const fetchNextPage = () => {
        if (end) {
            // End of data.
            return;
        }

        fetch({
            axiosInstance: apiInstance,
            method: context.method, 
            url: uri+"?"+context.paramsName+"="+next.current, 
            requestConfig: context.data
        });
    };


    useEffect(() => {
        if (response) {
            if (!isFirstPageReceived) {
                setDataToRender(response.data);
                setIsFirstPageReceived(true);
            } else {
                setDataToRender([...dataToRender, ...response.data]);
                next.current = context.next(next.current);
                if (response.data.length === 0) {
                    setEnd(true)
                }
            }
        }
    }, [response]);

    useEffect(() => {
        if (error) {
            setEnd(true)
            console.log("error", error)
            setDataToRender([])
        }
    }, [error]);


    const ListEndLoader = () => {
        if (!isFirstPageReceived && isLoading) {
            // Show loader at the end of list when fetching next page data.
            return <ActivityIndicator size={'large'} />;
        }
    };

    if (!isFirstPageReceived && isLoading) {
        return <ActivityIndicator size={'small'} />;
    }

    return (
        <FlatList
            style={style}
            horizontal={horizontal}
            data={dataToRender}
            keyExtractor={(item: any, index) => item.id + '-' + index}
            renderItem={renderItem}
            onEndReached={fetchNextPage}
            onEndReachedThreshold={1.2}
            ListFooterComponent={ListEndLoader} // Loader when loading next page.
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        />
    );
}