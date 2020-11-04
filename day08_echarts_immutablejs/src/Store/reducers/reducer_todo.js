// 创建默认的数据源（名字随意，前后一致就ok）
import { fromJS, Map, toJS } from "immutable";
const defaultState = fromJS({
    // 初始数据
    list: [],
});
console.log(defaultState);

// 定义reducer（reducer名字随意，前后一致就ok）
function reducer(state = defaultState, action) {
    // 还应该有修改state的业务代码（需要有action）才能进行
    let newState = fromJS(state);
    if (action.type === "add") {
        // let tmp = state.list;
        // tmp.push({ done: false, title: action.payload });
        // saveState({list: tmp});
        // return {
        //     list: tmp,
        // };
        newState = newState.update("list", (item) =>
            item.push(Map({ done: false, title: action.payload }))
        );
        saveState(newState.toJS());
        return newState;
    }
    // 删除
    if (action.type === "del") {
        state.list.splice(action.payload, 1);
        saveState({ list: state.list });
        return {
            list: state.list,
        };
    }
    // 切换
    if (action.type === "switch") {
        let tmp = state.list;
        state.list.map((item, index) => {
            if (index === action.payload) {
                tmp[index].done = !tmp[index].done;
            }
        });
        saveState({ list: tmp });
        return {
            list: tmp,
        };
    }
    // 返回state
    return loadState();
}

// 获取本地数据
const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
            // 如果本地没有则给默认数据源
            return defaultState;
        } else {
            return JSON.parse(serializedState);
        }
    } catch (err) {
        // 如果本地没有则给默认数据源
        return defaultState;
    }
};

// 存储数据到本地
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (err) {}
};

export default reducer;
