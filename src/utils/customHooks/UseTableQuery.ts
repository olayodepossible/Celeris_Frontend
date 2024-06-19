import { useQuery } from "react-query";
import { getTableData } from "../../services/axios/getRequest";

function useTableQuery() {
  const { isLoading, data, isError, error } = useQuery(
    "tableData",
    getTableData,
  );
  console.log(data?.data);
  return [isLoading, data?.data, isError, error];
}

export default useTableQuery;
