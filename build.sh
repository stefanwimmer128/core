#!/usr/bin/env bash

function build() {
    local prebuild=true
    
    while [[ $# -gt 0 ]] && [[ "$1" =~ ^-[\s\S]* ]]; do
        case "$1" in
            -C|--clean)
                [[ -d "dists" ]] && rm -dfr dists
                return
            ;;
            -S|--skip-prebuild)
                prebuild=false
            ;;
            *)
                echo "Flag $1 not recognized!"
            ;;
        esac
        shift
    done
    
    function __build() {
        $prebuild && yarn run gulp prebuild
        [[ ! -d "es6" ]] && echo "No ES6 build found!" && return
        
        [[ -d "dists" ]] && rm -dfr dists
        mkdir dists
        
        while [[ $# -gt 0 ]]; do
            local build=""
            local output=""
            
            if [[ "$1" =~ [\s\S]*:[\s\S]* ]]; then
                build="${1#*:}"
                output="${1%:*}"
            else
                build="$1"
                output="$(basename "$build")"
            fi
            
            BUILD="$build" yarn run gulp build || return
            for ext in ".js" ".js.map" ".min.js" ".min.js.map"; do
                mv "dist/core$ext" "dists/$output$ext"
            done
            
            shift
        done
    }
    
    if [[ $# -gt 0 ]]; then
        __build "$@"
    else
        __build core:.
    fi
}

[[ "$(readlink -f "$0")" == "$(readlink -f "$_")" ]] && build "$@"
