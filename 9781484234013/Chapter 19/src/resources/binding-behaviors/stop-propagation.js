
export class StopPropagationBindingBehavior {
  bind(binding, source) {
    binding.standardCallSource = binding.callSource;
    binding.callSource = function(event) {
      this.standardCallSource(event);
      event.stopPropagation();
    };
  }

  unbind(binding, source) {
    binding.callSource = binding.standardCallSource;
    binding.standardCallSource = null;
  }
}