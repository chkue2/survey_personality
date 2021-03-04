var nowPage = 1;

$(function(){
    setServeyPage();
})

$(document).on('click', '#btn_next', function(){
    nextPage();
});

$(document).on('click', '#btn_result', function(){
    goResult();
});

function setServeyPage(){
    const title = [
        '다른 사람이 나보다 일을 더 잘하면 나는 실패자가 된 것 같다.',
        '내가 항상 잘 해내지 않는다면 다른 사람들은 나를 존중해주지 않을 것이다.',
        '나는 깔끔하게 정리 정돈하는 사람이 되기 위해 노력한다.',
        '깔끔하게 정리 정돈하는 것은 나에게 중요하다.',
        '어떤 일을 만족스럽게 해내려면 시간이 무척 오래 걸린다.',
        '나는 신중을 기해서 했던 일에 대해서도 제대로 되지 않았다고 느낄 때가 자주 있다.',
        '부모님은 늘 나의 장래에 대해 나 자신보다 더 큰 기대를 갖고 계셨다.',
        '나의 부모님은 모든 면에서 내가 최고이길 바라셨다.',
        '나는 아주 높은 목표를 가지고 있다.',
        '나는 무슨 일에서든지 최고가 아니면 싫다.',
        '나 혼자 있을 때에만 진정으로 편안한 느낌이 든다.',
        '나는 실패한 일에 대해서는 다른 사람들에게 말하지 않는다.',
        '종종 나의 외모에 대해 신경을 쓴다.',
        '다른 사람들이 날 어떻게 생각하는지가 중요하다.',
        '내가 어떤 일을 해낼 수 있을 것이라고 다른 사람들이 믿는지에 따라 종종 나의 실제 능력이 좌우된다.',
        '다른 사람들이 내게 화가 나 있으면 나 자신에 대해 긍정적으로 느끼기 어렵다.',
        '내가 나 자신에게 내리는 긍정적인 평가보다, 나에 대한 다른 사람들의 긍정적 평가에 더 잘 수긍하게 된다.',
        '다른 사람들이 나를 존중해준다는 느낌을 받으면 그렇지 않을 때보다 더 만족스럽다.',
        '내가 두려워하는 나쁜 일들을 겪게 된 나 자신을 종종 상상한다.',
        '내 책임과 의무를 다하지 못할까봐 걱정된다.',
        '일반적으로 나는 내 인생에서 부정적인 사건을 예방하는 것에 초점을 맞춘다.',
        '일반적으로 나는 내 인생에서 긍정적인 결과들을 이루는 것에 초점을 맞춘다.',
        '내가 바라는 좋은 일들을 누리는 나 자신을 종종 상상한다.',
        '나의 꿈과 열망을 위해 "이상적인 나의 모습"에 도달하려고 노력한다.'
    ];

    const pageCnt = 7;

    var pageHtml = '';
    var qesHtml = '';
    var contentLng,contentCnt;
    var qesCnt = 1;

    for(var p=2; p <= pageCnt+1; p++){
        if(p >= 4 && p <= 6) contentLng = 4;
        else contentLng = 3;

        pageHtml = '<div class="page content" id="page_0'+p+'"></div>';
        $('#page_inner').append(pageHtml);

        contentCnt = 0;
        while(1){
            if(p === 5 || p === 6){
                qesHtml = '<div class="qst_box">' +
                            '<p class="qst">' +
                                title[qesCnt-1] +
                            '</p>' +
                            '<div class="qst_val_box">' +
                                '<label class="qst_val qst_f" for="qst-'+qesCnt+'-1"><input type="radio" name="qst-'+qesCnt+'" id="qst-'+qesCnt+'-1" value=1></label>' +
                                '<label class="qst_val" for="qst-'+qesCnt+'-2"><input type="radio" name="qst-'+qesCnt+'" id="qst-'+qesCnt+'-2" value=2></label>' +
                                '<label class="qst_val" for="qst-'+qesCnt+'-3"><input type="radio" name="qst-'+qesCnt+'" id="qst-'+qesCnt+'-3" value=3></label>' +
                                '<label class="qst_val" for="qst-'+qesCnt+'-4"><input type="radio" name="qst-'+qesCnt+'" id="qst-'+qesCnt+'-4" value=4></label>' +
                                '<label class="qst_val" for="qst-'+qesCnt+'-5"><input type="radio" name="qst-'+qesCnt+'" id="qst-'+qesCnt+'-5" value=5></label>' +
                                '<label class="qst_val qst_l" for="qst-'+qesCnt+'-6"><input type="radio" name="qst-'+qesCnt+'" id="qst-'+qesCnt+'-6" value=6></label>' +
                            '</div>' +
                            '<p class="anw_lv">' +
                                '<span>전혀 그렇지 않다</span>' +
                                '<span>매우 그렇다</span>' +
                            '</p>' +
                        '</div>';
            } else if(p === 7 || p === 8){
                qesHtml = '<div class="qst_box">' +
                            '<p class="qst">' +
                                title[qesCnt-1] +
                            '</p>' +
                            '<div class="qst_val_box">' +
                                '<label class="qst_val qst_f" for="qst-'+qesCnt+'-1"><input type="radio" name="qst-'+qesCnt+'" id="qst-'+qesCnt+'-1" value=1></label>' +
                                '<label class="qst_val" for="qst-'+qesCnt+'-2"><input type="radio" name="qst-'+qesCnt+'" id="qst-'+qesCnt+'-2" value=2></label>' +
                                '<label class="qst_val" for="qst-'+qesCnt+'-3"><input type="radio" name="qst-'+qesCnt+'" id="qst-'+qesCnt+'-3" value=3></label>' +
                                '<label class="qst_val" for="qst-'+qesCnt+'-4"><input type="radio" name="qst-'+qesCnt+'" id="qst-'+qesCnt+'-4" value=4></label>' +
                                '<label class="qst_val" for="qst-'+qesCnt+'-5"><input type="radio" name="qst-'+qesCnt+'" id="qst-'+qesCnt+'-5" value=5></label>' +
                                '<label class="qst_val" for="qst-'+qesCnt+'-6"><input type="radio" name="qst-'+qesCnt+'" id="qst-'+qesCnt+'-6" value=6></label>' +
                                '<label class="qst_val" for="qst-'+qesCnt+'-7"><input type="radio" name="qst-'+qesCnt+'" id="qst-'+qesCnt+'-7" value=7></label>' +
                                '<label class="qst_val" for="qst-'+qesCnt+'-8"><input type="radio" name="qst-'+qesCnt+'" id="qst-'+qesCnt+'-8" value=8></label>' +
                                '<label class="qst_val qst_l" for="qst-'+qesCnt+'-9"><input type="radio" name="qst-'+qesCnt+'" id="qst-'+qesCnt+'-9" value=9></label>' +
                            '</div>' +
                            '<p class="anw_lv">' +
                                '<span>전혀 그렇지 않다</span>' +
                                '<span>매우 그렇다</span>' +
                            '</p>' +
                        '</div>';
            } else {
                qesHtml = '<div class="qst_box">' +
                            '<p class="qst">' +
                                title[qesCnt-1] +
                            '</p>' +
                            '<div class="qst_val_box">' +
                                '<label class="qst_val qst_f" for="qst-'+qesCnt+'-1"><input type="radio" name="qst-'+qesCnt+'" id="qst-'+qesCnt+'-1" value=1></label>' +
                                '<label class="qst_val" for="qst-'+qesCnt+'-2"><input type="radio" name="qst-'+qesCnt+'" id="qst-'+qesCnt+'-2" value=2></label>' +
                                '<label class="qst_val" for="qst-'+qesCnt+'-3"><input type="radio" name="qst-'+qesCnt+'" id="qst-'+qesCnt+'-3" value=3></label>' +
                                '<label class="qst_val" for="qst-'+qesCnt+'-4"><input type="radio" name="qst-'+qesCnt+'" id="qst-'+qesCnt+'-4" value=4></label>' +
                                '<label class="qst_val qst_l" for="qst-'+qesCnt+'-5"><input type="radio" name="qst-'+qesCnt+'" id="qst-'+qesCnt+'-5" value=5></label>' +
                            '</div>' +
                            '<p class="anw_lv">' +
                                '<span>전혀 그렇지 않다</span>' +
                                '<span>매우 그렇다</span>' +
                            '</p>' +
                        '</div>';
            }
            
            
            $('#page_0' + p).append(qesHtml);
            contentCnt++;
            qesCnt++;

            if(contentCnt === contentLng) break;
        }
    }
}

function nextPage(){

    var cnt = $('#page_0'+nowPage).find('input[type=radio]:checked').length;
    if(nowPage > 1){
        if(nowPage >= 4 && nowPage <= 6){
            if(cnt < 4) return false;
        } else {
            if(cnt < 3) return false;
        }
    }

    nowPage ++;

    if(nowPage === 8) {
        $('#btn_text').html('결과보기');
        $('#btn_next').attr('id', 'btn_result');
    }
    else $('#btn_text').html('다음');

    $('.content').removeClass('show');
    $('#page_0' + nowPage).addClass('show');

    $(window).scrollTop(300);
}

function goResult() {
    var cnt = $('#page_0'+nowPage).find('input[type=radio]:checked').length;
    if(cnt < 3) return false;

    var v1 = getAvg(getVal('qst-1'), getVal('qst-2'));
    var v2 = getAvg(getVal('qst-3'), getVal('qst-4'));
    var v3 = getAvg(getVal('qst-5'), getVal('qst-6'));
    var v4 = getAvg(getVal('qst-7'), getVal('qst-8'));
    var v5 = getAvg(getVal('qst-9'), getVal('qst-10'));

    var type = getResult();

    location.href = '/result.html?res=' + type + '&v1=' + v1 + '&v2=' + v2 + '&v3=' + v3 + '&v4=' + v4 + '&v5=' + v5;
}

function getVal(id){
    var $target = $('input[name="'+id+'"]:checked');
    return $target.val();
}

function getAvg(v1, v2){
    return (parseInt(v1) + parseInt(v2)) / 10 * 100;
}

function getResult(){
    var v1 = 0, v2 = 0;

    for(var i=11; i<=18; i++){
        v1 += parseInt(getVal('qst-' + i));
    }
    
    v2 =    ((parseInt(getVal('qst-22')) + parseInt(getVal('qst-23')) + parseInt(getVal('qst-24'))) / 3.00).toFixed(2) -
            ((parseInt(getVal('qst-19')) + parseInt(getVal('qst-20')) + parseInt(getVal('qst-21'))) / 3.00).toFixed(2) ;

    //v1 : 자기 평가소개, v2 : 조절초점

    var res;


    if(v1 > 32 && v2 > 1) res = 'seeking'; //'눈치백단 인정추구형'
    else if(v1 <= 32 && v2 > 1) res = 'growth'; //'강철멘탈 성장지향형'
    else if(v1 > 32 && v2 <= 1) res = 'spurt'; //'스릴추구 막판스퍼트형'
    else if(v1 <= 32 && v2 <= 1) res = 'safety'; //'방탄조끼 안전지향형'
    else res = 'NaN';

    return res;
}