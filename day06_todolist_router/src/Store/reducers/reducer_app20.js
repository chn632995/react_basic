// 创建默认的数据源（名字随意，前后一致就ok）
const defaultState = {
    // 初始化计数器为0
    count: 0,
};

// 定义reducer（reducer名字随意，前后一致就ok）
function reducer(state = defaultState, action) {
    // 还应该有修改state的业务代码（需要有action）才能进行
    if (action.type === "incr") {
        return {
            count: state.count + action.payload,
        };
    }
    // 返回state
    return state;
}

export default reducer;