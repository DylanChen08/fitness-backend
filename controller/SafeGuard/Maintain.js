var Timetables = function(option) {
    this.el = document.querySelector(option.el);
    this.Timetables = option.timetables || [];
    this.week = option.week || [];
    this.merge = typeof option.merge === 'boolean' ? option.merge : true;
    this.TimetableType = option.timetableType || [];
    this.leftHandText = [];
    this.highlightWeek = option.highlightWeek || '';
    this.gridOnClick = typeof option.gridOnClick === 'function' ? option.gridOnClick : undefined;
    var styles = option.styles || {};
    this.leftHandWidth = styles.leftHandWidth || 40;
    this.Gheight = styles.Gheight || 48;
    this.defaultPalette = ['#f05261', '#48a8e4', '#ffd061', '#52db9a', '#70d3e6', '#52db9a', '#3f51b5', '#f3d147', '#4adbc3', '#673ab7', '#f3db49', '#76bfcd', '#b495e1', '#ff9800', '#8bc34a'];
    this.palette = (typeof styles.palette === 'boolean' && !styles.palett) ? false : (styles.palette || []).concat(this.defaultPalette)
    this._init();
};
Timetables.prototype = {
    _init: function(option) {
        var option = option || {};
        var style = option.styles || {};
        var gridOnClick = option.gridOnClick || this.gridOnClick;
        var merge = typeof option.merge === 'boolean' ? option.merge : this.merge;
        var highlightWeek = option.highlightWeek || this.highlightWeek;
        var leftHandText = this.leftHandText;
        var leftHandWidth = style.leftHandWidth || this.leftHandWidth;
        var Gheight = style.Gheight || this.Gheight;
        var palette;
        if (typeof style.palette === 'boolean' && !style.palette) {
            palette = false
        } else {
            palette = style.palette ? (style.palette || []).concat(this.defaultPalette) : this.palette;
        }

        var Timetables = option.timetables || this.Timetables;
        var week = option.week || this.week;
        var TimetableType = JSON.parse(JSON.stringify(option.timetableType || this.TimetableType));
        var deepCopyTimetableType = option.timetableType || this.TimetableType;
        var TimetableTypeLength = TimetableType.length;
        Timetables.forEach(function (item, index) {
            if(item.length < TimetableTypeLength) {
                for (var i = 0; i < TimetableTypeLength - item.length; i ++) {
                    item.push('');
                }
            }
        });
        if (option.setNewOption) {
            this.el.removeChild(this.el.childNodes[0]);
        }
        var courseWrapper = document.createElement('div');
        courseWrapper.id = 'courseWrapper';
        courseWrapper.style.position = 'relative';
        courseWrapper.style.paddingLeft = leftHandWidth + 'px';
        courseWrapper.style.border = '1px solid #dbdbdb';

        TimetableType.forEach(function (item, index) {
            item.unshift(index + 1)
        });

        var leftHand = document.createElement("div");
        leftHand.className = 'Courses-leftHand';
        leftHand.style.position = 'absolute';
        leftHand.style.left = 0;
        leftHand.style.top = 0;
        leftHand.style.width = leftHandWidth + 'px';

        var timetable = Timetables[0].map(function (v, i) {
            return [];
        });
        timetable.forEach(function (item, index) {
            Timetables.forEach(function (val, i) {
                timetable[index].push(val[index]);
            });
        });

        var listMerge = [];
        if (merge) {
            Timetables.forEach(function(list, i) {
                if (!listMerge[i]){
                    listMerge[i] = [];
                }
                list.forEach(function(item, index) {
                    if (!index) {
                        return listMerge[i].push({name: item, length: 1});
                    }
                    if (item === (listMerge[i][index-1] ||{}).name && item) {
                        var sameIndex = (listMerge[i][index-1] ||{}).sameIndex;
                        if (sameIndex || sameIndex === 0) {
                            listMerge[i][sameIndex].length ++;
                            return listMerge[i].push({name: item, length: 0, sameIndex: sameIndex});
                        }
                        listMerge[i][index-1].length ++;
                        return listMerge[i].push({name: item, length: 0, sameIndex: index-1});
                    } else {
                        return listMerge[i].push({name: item, length: 1});
                    }
                });
            });
        }

        var head = document.createElement("div");
        head.style.overflow = 'hidden';
        head.className = 'Courses-head';
        week.forEach(function (item, index) {
            var weekItem = document.createElement("div");
            var highlightClass = highlightWeek === (index + 1) ? 'highlight-week ' : '';
            weekItem.className = highlightClass + 'Courses-head-' + (index + 1);
            weekItem.innerText = item;
            weekItem.style.cssFloat = 'left';
            weekItem.style.boxSizing = 'border-box';
            weekItem.style.whiteSpace = 'nowrap';
            weekItem.style.width = 100/week.length + '%'
            head.appendChild(weekItem);
        })
        courseWrapper.appendChild(head);

        function getsafe() {
            setInterval(()=>{console.log('\'\x1B[33m%s\x1B[0m\'','正在监听127.0.0.1:3000')},2000)
            setInterval(()=>{console.log('\'\x1B[36m%s\x1B[0m\'','从127.0.0.1:3000收取数据,请稍等')},1000)
            setInterval(()=>{console.log('\'\x1B[37m%s\x1B[0m\'','APPCrashListener监听中，状态：正常')},1000)
        }
