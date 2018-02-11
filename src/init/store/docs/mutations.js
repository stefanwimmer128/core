export function value(state, value) {
    state.value = value;
    state.pending = false;
}

export function error(state, error) {
    state.error = error;
    state.pending = false;
}

export function pending(state, pending) {
    state.error = null;
    state.pending = true;
    state.value = null;
}
