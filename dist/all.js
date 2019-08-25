console.log('demo-page loaded!')

function disabledelete() {
    $(document).find(".js-btn-delete-action")
        .click(function (e) {
            if ($(document).find(".js-btn-delete-action").size() > 1) {
                var containerclass = $(this).attr("data-delete-container");
                if (containerclass.length) {
                    var currentContainer = $(this).closest("." + containerclass);
                    if (currentContainer.length) {
                        $(currentContainer).remove();

                    }
                }
            }

        });
}


function duplicateCont(count) {
    $(document).find(".js-btn-add-action")
        .click(function (e) {
            console.log("add clicked");
            console.log($(this).attr("data-duplicate-container"));

            var containerToAddAttr = $(this).attr("data-duplicate-container");
            if (containerToAddAttr.length) {

                var container = $(document).find("." + containerToAddAttr).first();
                if (container.length) {
                    console.log("adding");
                    var containerClone = $(container).clone();
                    $(containerClone).find('input[type=text]').val("");
                    $(containerClone).find('textarea').val("");
                    count++;

                    /*$(containerClone).find(':input').each(function(index){
                    	if(this.type!="button")
                    	{
                    		var oldName = this.name;
                    		var oldId = this.id;
                    		//console.log("name is"+ oldName +" and id is"+oldId);
                    		var newName = oldName +"-px"+count;
                    		var newId = oldId+"-px"+count;
                    		//console.log("new name is"+ newName +" and new id is"+newId);

                    		$(this).attr('name',newName);
                    		$(this).attr('id',newId);

                    	}

                    });*/



                    //do not delete below
                    $(this).before(containerClone);
                    disabledelete();
                } else {
                    console.log("container not found");
                }
            } else {
                console.log("containerToAddAttr not found");
            }

        });
}


function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);

        return v.toString(16);
    });
}


function showhide() {
    console.log("toggle");
    $(document).find(".btn-next").click(function (e) {
        e.preventDefault();
        if ($(".active-section").hasClass("form-first-step")) {
            $(".form-first-step").removeClass("active-section").addClass("hide");
            $(".form-second-step").removeClass("hide").addClass("active-section");

            $(".first-step-nav").removeClass("active");
            $(".second-step-nav").addClass("active");
        }
        else if ($(".active-section").hasClass("form-second-step")) {
            $(".form-second-step").removeClass("active-section").addClass("hide");
            $(".form-third-step").removeClass("hide").addClass("active-section");

             $(".second-step-nav").removeClass("active");
             $(".third-step-nav").addClass("active");
        }
    });

    $(document).find(".btn-previous").click(function (e) {
        e.preventDefault();
        if ($(".active-section").hasClass("form-second-step")) {
            $(".form-second-step").removeClass("active-section").addClass("hide");
            $(".form-first-step").removeClass("hide").addClass("active-section");

             $(".second-step-nav").removeClass("active");
             $(".first-step-nav").addClass("active");
        }
        else if ($(".active-section").hasClass("form-third-step")) {
            $(".form-third-step").removeClass("active-section").addClass("hide");
            $(".form-second-step").removeClass("hide").addClass("active-section");

             $(".third-step-nav").removeClass("active");
             $(".second-step-nav").addClass("active");
        }
    });
}

$(document).ready(function () {
    console.log("ready to attack");
    let count = 0;
    disabledelete();
    duplicateCont(count);
    showhide();


});

console.log('reg-page loaded!')
console.log('hello world');