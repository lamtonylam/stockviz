import data from "../data/mock.json" with { type: "json" };

export const get_stock_data = () => {
    const stock_data = data["Time Series (Daily)"]

    const stock_data_list = []
    
    for (const [key, value] of Object.entries(stock_data)) {
      // adds to the list (date in epoch , closing value)
      stock_data_list.push([new Date(key).getTime(), Number(value["4. close"])])
    }
    
    // sort the list by ascending order, ie oldest entry is first in array
    stock_data_list.sort((a, b) => a[0] - b[0])
    
    return stock_data_list
}
