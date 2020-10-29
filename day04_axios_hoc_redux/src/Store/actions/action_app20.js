// 定义一个修改规则（action）
// 此文件中不要使用默认导出（原因数据修改规则可能会有很多个）
export const actionCreator = () => {
    return {
        type: "incr",
        payload: 9,
    };
};
